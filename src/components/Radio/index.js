function Radio({ title, handleChange, ischecked, name, id }) {
   return (
      <div>
         <input id={id} type="radio" onChange={handleChange} defaultChecked={ischecked} name={name} />
         <label for={id}>{title}</label>
      </div>
   );
}

export default Radio;
