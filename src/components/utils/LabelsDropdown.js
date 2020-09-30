import React, { useEffect, useState } from 'react';
import { Dropdown, FormControl, Button } from 'react-bootstrap';

export default function LabelsDropdown(props) {
  const [value, setValue] = useState('');
  const [filterTags, setFilterTags] = useState([]);

  useEffect(() => {
    props.setQuery(filterTags.join('&'));
  }, [filterTags]);

  function handleSelect(eventKey, e) {
    if (filterTags.includes(e.target.text)) {
      const newFilterTags = filterTags.filter((item) => item !== e.target.text);
      setFilterTags(newFilterTags);
    } else {
      setFilterTags(filterTags => [...filterTags, e.target.text]);
    }
  }

  /*function filter() {
    let filteredData = props.data.filter(elem => {
      if (filterTags.length === 0) {
        return true;
      }
      return (elem.labels.filter(label => filterTags.includes(label)) === filterTags);
    });
    props.updateFunc(filteredData);
  }*/
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      variant="success"
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </Button>
  ));
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Я ищу..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value.toLowerCase()),
            )}
          </ul>
        </div>
      );
    },
  );
  const dropdownItems = props.labels.map((label, index) => <Dropdown.Item eventKey={index} onSelect={handleSelect}>{label.text}</Dropdown.Item>);
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle}>
        Фильтр тегов
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Header>Теги</Dropdown.Header>
        {dropdownItems}
      </Dropdown.Menu>
    </Dropdown>
  );
}
