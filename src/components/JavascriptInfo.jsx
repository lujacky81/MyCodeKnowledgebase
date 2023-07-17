import Info from './Info.jsx';

function JavascriptInfo() {
    return (
        <div className="infoPage">
            <div className="infoPoint">
                <Info
                    title="Promises:"
                    text=""
                />
                <p className="info__para">
                There are 2 approaches to accessing the data in promises. The first one is using <code>“.then”</code> and the other is <code>“async”</code> and <code>“await”</code>. <br/>
            
                </p>
                <code>
                Method 1: <br/>    
                    fetch(some_data_from_somewhere) <br />
                    &nbsp;&nbsp;.then((response) =&gt; &#123; <br />	
                    &nbsp;&nbsp;&nbsp;&nbsp;return response.json(); <br />
                    &nbsp;&nbsp;&nbsp;&#125;) <br />
                    &nbsp;&nbsp;.then((data) =&gt; &#123; <br />
                    &nbsp;&nbsp;&nbsp;//this "data" variable has all the data from the fetch&nbsp;&nbsp;<br />
                    &nbsp;&nbsp;&#125;);
                </code>
                <br />
                <code>
                Method 2: <br/>    
                    async function main()&#123; <br />	
                    &nbsp; const response = await fetch(some_data_from_somewhere);&nbsp;&nbsp;<br />
                    &nbsp; const data = await response.json(); <br />
                    &nbsp;&nbsp;//this data variable has all the data from the fetch
                    <br />
                    &nbsp;&#125;
                </code>
            </div>

            <div className="infoPoint">
                <Info
                    title="Making API calls:"
                    text="An API can be accessed by using a “fetch()” to the API’s endpoint. This fetch returns a promise where the data can be accessed via one of the two methods previously described."
                />
            </div>
            <div className="infoPoint">
                <Info
                    title="“foreach” loops in JS:"
                    text=""
                />
                <p className="info__para">
                    <code>“for (const property in object)”</code> loops through each property of an object. <br />
                    <code>“for (const element of iterable)”</code> loops through each element of an iterable object such as Arrays, Strings, Map, Set, and NodeList.
                </p>
            </div>
        </div>
    );
}

export default JavascriptInfo;