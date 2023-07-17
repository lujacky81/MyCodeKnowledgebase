import Info from "./Info.jsx";
function CssInfo() {
  return (
    <div className="infoPage">
      <div className="infoPoint">
        <Info
          title="BEM class naming convention:"
          text="BEM stands for block element modifier. This naming convention helps create reusable CSS and with meaningful names to help with readability. "
        />
      </div>

      <div className="infoPoint">
        <Info title="General starting style to all elements:" text="" />
        <code>
          &nbsp;* &#123; <br />
          &nbsp;&nbsp; &nbsp;margin: 0; <br />
          &nbsp;&nbsp; &nbsp;padding: 0; <br />
          &nbsp;&nbsp; &nbsp;box-sizing: border-box; <br />
          &nbsp;&#125;
        </code>
      </div>

      <div className="infoPoint">
        <Info title="Flexbox centering:" text="" />
        <p className="info__para">
          <code>“justify-items”</code> adjusts the centering parallel to the
          flex direction. <br />
          <code>“align-items”</code> adjusts the centering perpendicular to the
          flex direction. <br />
          These properties can have other uses outside of centering items to
          align in these directions but on either side instead of centering.
        </p>
      </div>
      <div className="infoPoint">
        <Info title="Creating animations:" text="" />
        <p className="info__para">
          Animations are created using <code>"@keyframes (some name)"</code>{" "}
          where a set of styles is applied at <code>"0%"</code> and another set
          at <code>"100%"</code>. More intermediate points can be added if
          needed. The <code>“transition”</code> property should be used along
          with any animations to establish the <code>“transition-property</code>
          , <code>“transition-duration”</code>,{" "}
          <code>“transition-timing-function”</code>, and{" "}
          <code>“transition-delay”</code>. <br />
          <br />
          Example: <br />
          <code>transition: all ease 300ms;</code>
        </p>
      </div>

      <div className="infoPoint">
        <Info title="Media queries for conditional CSS code blocks:" text="" />
        <p className="info__para">
          Use <code>“@media (some condition)”</code> to apply some styling if
          the condition is true. This is commonly used for responsive web
          development to adjust styling based on the max-width of the device.
          This includes things such as font sizes, layouts, etc.
        </p>
      </div>

      <div className="infoPoint">
        <Info title="Coloring SVG icons using filter:" text="" />
        <p className="info__para">
          SVG icons cannot be colored with the usual styling approaches to
          changing color. One way to work around this is to use the <code>“filter”</code> style. Although it might not always work perfectly this method can be
          a lot more useful than no color at all. <br />
          This codepen takes in the target color HEX code and generates the styling filter to get close to the given color as possible: <br/>
          <a href="https://codepen.io/sosuke/pen/Pjoqqp" className="url">https://codepen.io/sosuke/pen/Pjoqqp</a>
        </p>
      </div>

    </div>
  );
}

export default CssInfo;
