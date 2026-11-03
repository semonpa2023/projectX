function FormField({ label, name, type = 'text', value, onChange, required = true }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}

export default FormField;
