function Tab({ title, backgroundColor, isDarkMode }) {
  return (
    <div
      className={`hover:bg-button $${backgroundColor ? "bg-button dark:bg-avatar dark:hover:bg-button" : (isDarkMode ? "bg-slate-900 dark:hover:bg-button" : "bg-white")} flex items-center cursor-pointer text-start py-2 pr-32 pl-6 max-w-52 rounded-xl text-xl`}
    >
      <span className="ml-2">{title}</span>
    </div>
  );
}

export default Tab;
