import Info from "./Info.jsx";

function HtmlInfo() {
    return (
        <div className="infoPage">

            <div className="infoPoint">
                <Info
                    title="Div and Span tags:"
                    text=""
                />
                <p className="info__para">
                General use containers that do not inherently represent anything. They are used to group other elements for styling. "<code>&lt;div&gt;</code>" is a block-level element and "<code>&lt;span&gt;</code>" is in line.
                </p>
            </div>

            <div className="infoPoint">
                <Info
                    title="Anchor tags:"
                    text=""
                />
                <p className="info__para">
                    The "<code>&lt;a&gt;</code>" tag is used to link to other parts of the site or external URLs. When linking to another element in the same page, the "<code>&lt;a&gt;</code>" tag instantly jumps to that element. This can be changed by making the “scroll-behavior” style to smooth on the "<code>&lt;html&gt;</code>" tag.
                </p>
            </div>

            <div className="infoPoint">
                <Info
                    title="Creating forms using the fieldset tag:"
                    text=""
                />
                <p className="info__para">
                The "<code>&lt;fieldset&gt;</code>" tag is used in forms that wraps everything inside the form. Inside the fieldset there "<code>&lt;legend&gt;</code>" tag can be used as a 'title' along the top of the form. "<code>&lt;datalist&gt;</code>" tags can be paired with "<code>&lt;input&gt;</code>" tags as a way to autofill text input. Inside the "<code>&lt;datalist&gt;</code>" there are "<code>&lt;option&gt;</code>" tags with a value attribute to create the autofill options. These options can also be seen as a dropdown menu in the input.
                </p>
            </div>

            <div className="infoPoint">
                <Info 
                title="Sub and Sup tags:"
                text=""
                />
                <p className="info__para">"<code>&lt;Sub&gt;</code>" and "<code>&lt;Sup&gt;</code>" tags are used to create subscript and superscript text. </p>
            </div>
            <div className="infoPoint">
                <Info 
                title="Html entities:"
                text="Html entities are a way to represent all symbols via an entity and/or entity number. The characters that are interpreted as coding can be displayed in html (and not interpreted as code) by using its corresponding entity value. A full list of the html entities can be found here:"
                />
                <a className="url" href="https://www.freeformatter.com/html-entities.html" target="_blank">https://www.freeformatter.com/html-entities.html</a>
            </div>

        </div>
    );
}

export default HtmlInfo;
