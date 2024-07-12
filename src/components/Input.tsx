import "./Input.css";

type Props = {
  label: string;
  placeholder: string;
  fieldId: string;
  field: "input" | "textarea";
};

export function Input({ label, placeholder, fieldId, field }: Props) {
  return (
    <div className="input">
      <label htmlFor={fieldId}>{label}</label>
      {field === "input" ? (
        <input
          type="text"
          name={fieldId}
          id={fieldId}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          name={fieldId}
          id={fieldId}
          placeholder={placeholder}
        ></textarea>
      )}
    </div>
  );
}
