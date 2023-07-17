import Info from './Info.jsx';
function ReactInfo() {
    return (
        <div className="infoPage">
            <div className="infoPoint">
                <Info
                    title="Creating custom components:"
                    text=""
                />
                <p className="info__para">
                Components are created by making a new js/jsx file that is a function that returns this new component. Other resources can be imported at the top to be used in this component. The file must include a <code>“export default &#123;componentName&#125;;”</code> line in order to be used and imported by other files.
                </p>
            </div>

            <div className="infoPoint">
                <Info
                    title="Passing props:"
                    text="Props are data values passed to components as element attributes whenever they are created.The name of the attribute must match a parameter of the function defining the component in order to access that value."
                />
            </div>

            <div className="infoPoint">
                <Info
                    title="UseState hook:"
                    text=""
                />
                <p className="info__para">
                The useState hook allows for data to be tracked. The state is initialized with a variable name for the data, a function to update this variable, and a call to <code>“useState(initial_value)”</code> where the parameter is the initial value of this state variable. <br />
                Example: <br />
                <code>const [count, setCount] = useState(10)</code> <br />
                <br />
                When updating a state variable the function can take a parameter that is the current value of the state variable. <br />
                <br />
                Example of adding 1 to current value of count: <br />
                <code>setCount((prevCount) =&gt; prevCount + 1)</code> <br />
                <br />
                If the state variable is an object, the previous value must be spread out using the <code>“...”</code> operator so that unchanged variables keep their values and updated variables are based on previous values.

                </p>
            </div>

            <div className="infoPoint">
                <Info
                    title="UseEffect hook:"
                    text=""
                />
                <p className="info__para">
                The useEffect hook takes a function as the first parameter and an optional array of dependency variables as the second parameter.  <br />
                If there is no second parameter then the function is run on every render. <br />
                If the dependency array is empty then the function runs only on the first render. <br />
                If there are variables in the dependency array then the function is run on the first render and any time any of the variables are changed.

                </p>
            </div>
        </div>
    );
}

export default ReactInfo;