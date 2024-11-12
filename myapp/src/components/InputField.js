/**
 * This is a cutome input field.
 * This all params are required.
 *
 * @param {string} title - use for input labaling
 * @param {string} value - user given current value
 * @param {string} type - input tag type
 * @param {Function} [ e => setfield(e.target.value)] onChange - call back function
 * @param {string} error - display an error if the user given data invalid
 * @returns {Component}  - return a input  component
 */

function InputField({ title, value, type, onChange, error }) {
  // when error occured change border style
  const styleBorder = error !== "" ? "border-red-500" : "";

  const style = {
    lable: "block pb-2 text-xl text-purple-700 focus:border-violet-50",
    input: `${styleBorder} px-4 border rounded-md h-14 w-full focus:outline-none focus:border-violet-600`,
  };

  return (
    <div className="w-full pb-2">
      <label className={style.lable}>{title}</label>
      <input
        type={type}
        className={style.input}
        value={value}
        onChange={onChange}
        placeholder={title}
      />
      <p className="pt-1 text-red-500 ">{error}</p>
    </div>
  );
}
export default InputField;
