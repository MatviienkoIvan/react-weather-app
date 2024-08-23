var React = require("react");
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Example</h1>
      <p>Here're a few example locations to try out:</p>    
      <ol>
        <li>
          <Link to='/?location=Opole'>Opole, OPO</Link>
        </li>
        <li>
          <Link to='/?location=Warszaw'>Warszaw</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
