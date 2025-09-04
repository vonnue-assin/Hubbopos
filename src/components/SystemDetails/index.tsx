import './styles.css';

export type LeadingSystemsDetails = {
  id: string | number;
  imageUrl: string;
  Heading: string;
  span: string;
  description: string;
};

type SystemDetailsProps = {
  systemsData: LeadingSystemsDetails[];
};

const SystemDetails: React.FC<SystemDetailsProps> = ({ systemsData }) => {
  return (
    <div className="systemDetails-container">
      <div className="systemDetails-sub-container">
        {systemsData.map(systems => (
          <div key={systems.id} className="single-card-systemdetails">
            <img
              src={systems.imageUrl}
              alt={systems.Heading}
              className="image-card"
            />
            <div className="text-containers">
              <span className="text-headings">
                {systems.Heading} <span>{systems.span}</span>
              </span>

              <p className="text-description">{systems.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemDetails;
