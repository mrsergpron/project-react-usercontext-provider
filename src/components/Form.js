import userContext from "../userContext";

const Form = () => {
  function value1() {
    const input = document.querySelector("input");

    if (!input.value || input.value[0] === " ") {
      input.value = "";
    } else {
      let val = input.value.trim();

      input.value = "";
      return val;
    }
  }

  return (
    <div>
      <userContext.Consumer>
        {(value) => (
          <>
            <input type="text" placeholder="name of task" required />
            {/* <button onClick={() => value.setTask(1)}>Send</button> */}
            <button
              onClick={() => {
                let val = value1();
                if (val) {
                  value.add(val);
                }
              }}
            >
              Send
            </button>

            <button onClick={() => value.del()}>Delete</button>
          </>
        )}
      </userContext.Consumer>
    </div>
  );
};
export default Form;
