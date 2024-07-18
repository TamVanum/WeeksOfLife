import "../../assets/Inputs.css";

interface LifeExpentancyFieldProps {
  value: number;
  setValue: (arg0: number) => void;
  title: string;
}

const LifeExpentancyField: React.FC<LifeExpentancyFieldProps> = ({
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
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <h6>years</h6>
      </div>
    </>
  );
};

export default LifeExpentancyField;
