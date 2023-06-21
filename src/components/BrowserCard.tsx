type Props = {
  name: string;
  version: string;
  imgUrl: string;
  classProp: string;
};

const BrowserCard = ({name, version, imgUrl, classProp}:Props) => {
  return (
    <div className={`${classProp} browser-card max-w-fit flex flex-col items-center shadow-lg p-6 rounded gap-9 h-fit`}>
      <figure className="flex flex-col items-center gap-4">
        <div>
          <img src={imgUrl} alt="" />
        </div>
        <figcaption className="text-center">
          <h4 className="text-blue-200 font-medium text-lg">Add to {name}</h4>
          <p className="text-blue-100 text-sm">Minimum version {version}</p>
        </figcaption>
      </figure>

      <button className="px-5 py-3 text-white bg-blue-200 rounded">
        Add and install to extension
      </button>
    </div>
  );
};

export default BrowserCard;
