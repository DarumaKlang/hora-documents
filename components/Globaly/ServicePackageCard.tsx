// Component สำหรับการ์ดแพ็กเกจ
const ServicePackageCard: React.FC<{ title: string; price: string; description: string; buttonText: string }> = ({
    title,
    price,
    description,
    buttonText,
}) => (
    <div className="border border-package-border rounded-lg p-6 mb-4 bg-white shadow-sm">
        <h4 className="font-semibold text-lg mb-2">{title}</h4>
        <p className="text-primary-red text-2xl font-bold mb-4">{price}</p>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className="bg-primary-red text-white bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-md hover:opacity-90">
            {buttonText}
        </button>
    </div>
);

export default ServicePackageCard;