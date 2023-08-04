function Radio({ title, handleChange, ischecked, name, id, value, onClick, price }) {
   return (
      <div>
         <input
            id={id}
            type="radio"
            onChange={handleChange}
            defaultChecked={ischecked}
            name={name}
            value={value}
            onClick={onClick}
         />
         <label for={id}>
            {title} - {price}vnd
         </label>
      </div>
   );
}

export default Radio;
