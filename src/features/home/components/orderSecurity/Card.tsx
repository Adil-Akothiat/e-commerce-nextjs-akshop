import type { CardProps } from "../../types";

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div
      className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <span className="text-slate-700 text-5xl">
        {icon}
      </span>
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default Card;
