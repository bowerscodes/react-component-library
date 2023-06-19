import React from "react";

import './checkboxes.css';


type Props = {
  id: string;
  value: string;
  label: string;
  selected: boolean;
  onChange: () => void;
};

export const Checkbox = ({
  id,
  value,
  label,
  selected,
  onChange,
  ...attrs
}: Props) => {
  return (
    <div className="checkbox-item">
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input 
            id={id}
            type="checkbox"
            className="checkbox-item-input"
            value={value}
            onChange={onChange}
          />
          <span className="checkbox"/>
          <div className="checkbox-item-label">
            {label}
          </div>
        </label>
      </div>
    </div>
  )
};
