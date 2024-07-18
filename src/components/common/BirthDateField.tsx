import "../../assets/Inputs.css";

interface BirthDateFieldProps {
  value: string;
  setValue: (arg0: string) => void;
  title: string;
}

const BirthDateField: React.FC<BirthDateFieldProps> = ({
  value,
  setValue,
  title,
}) => {
  return (
    <>
      <div className="input-grid">
        <h3>{title}</h3>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <h6>dd/mm/yyyy</h6>
      </div>
    </>
  );
};

export default BirthDateField;
