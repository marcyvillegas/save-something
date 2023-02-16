import styles from "./logo.module.css";

function Logo() {
  return (
    <div className="bg-white rounded flex content-center px-2 lg:px-3">
        <h2 className={`text-xl lg:text-4xl font-bold mr-1 py-2 lg:py-3 text-[#346485]`}>
          Save Something
        </h2>
        <h2 className="text-xl lg:text-4xl font-bold py-2 lg:py-3">💰</h2>
    </div>
  );
}

export default Logo;
