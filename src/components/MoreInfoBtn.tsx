type Props = {
  link: string;
};

const MoreInfoBtn = ({ link }: Props) => {
  return (
    <div>
      <a href="">
        <button className=" bg-blue-200 hover:bg-transparent outline-2 outline-blue-200 text-white hover:text-blue-300 py-3 px-4 rounded font-medium">
          More Info
        </button>
      </a>
    </div>
  );
};

export default MoreInfoBtn;
