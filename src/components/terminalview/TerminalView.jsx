import React, { Component } from "react";
import "./terminal.css";

class Terminal extends Component {
  state = {
    dragging: false,
    top: 0,
    left: 0,
    command: "",
    terminalText: "",
    cursor: true,
  };

  prompt = "$> ";
  terminal = React.createRef();
  terminalBody = React.createRef();
  cursor = React.createRef();

  close = () => {};

  toggleWidth = () => {};

  blinkCursor = () =>
    this.setState({
      cursor: !this.state.cursor,
      timeout: setTimeout(this.blinkCursor, 400),
    });

  stopCursor = () => {
    clearTimeout(this.state.timeout);

    this.setState({
      timeout: null,
      cursor: true,
    });
  };

  startDrag = ({ clientX, clientY }) =>
    this.setState({
      dragging: true,
      startX: clientX,
      startY: clientY,
    });

  drag = ({ clientX, clientY }) => {
    const { top, left, startX, startY, dragging } = this.state;

    if (!dragging) return;

    this.setState({
      top: top + clientY - startY,
      left: left + clientX - startX,
      startX: clientX,
      startY: clientY,
    });
  };

  endDrag = () => this.setState({ dragging: false });

  handleInput = ({ key }) => {
    let ignoreKeys = [
      "Meta",
      "Alt",
      "Shift",
      "Control",
      "Escape",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
    ];

    if (key == "Backspace") {
      this.setState({ command: this.state.command.slice(0, -1) });
    } else if (key == "Enter") {
      this.handleCommand(this.state.command);
      this.setState({ command: "" });
    } else if (ignoreKeys.includes(key)) {
      return;
    } else {
      this.setState({ command: this.state.command + key });
    }
  };

  handleCommand = (command) => {
    let output;

    switch (command) {
      case "about":
        output = `
As a web and mobile developer with a mid-level understanding of artificial intelligence and machine learning,
I have honed my skills in creating dynamic and intuitive applications that enhance the user experience.
My expertise in AI and ML has enabled me to develop intelligent systems that can make predictions and automate certain processes,
providing my clients with innovative solutions to their business needs.
 With a passion for technology and a drive to stay ahead of the curve,
I strive to constantly improve my skills and stay up-to-date with the latest industry advancements. 
Whether it's building complex web applications or crafting elegant mobile experiences,
I am dedicated to delivering exceptional results for my clients.

GitHub: https://github.com/SaidKSI
Twitter: https://twitter.com/KsiSaid
LinkedIn: https://www.linkedin.com/in/said-oussat-226030248/`;
        break;
      case "skills":
        output = `
LANGUAGES        FRAMEWORKS             DATABASE        OTHER

Java           React/Next               Postres         Wordpress
C#             ASP.NET/ASP.NETCore      MySQL           Git
Python         TenserFlow/Flask/Django  MongoDB         Doker
PHP            Sass/Tailwind/Bootstarp                  NodeJS
Javascript     Express
                Laravel 
`;
        break;
      case "projects":
        output = `
inventory-manager => a web app using FireBase and ReactJS for managing a store income and Expenses
Clinic manager => a Web site for managing the Clinic appointment,Patient,Payments using React Express Postres(Sequelize)
Ecommarce Websites => i created many Ecommarce website using CMS or FRAMEWORKS
Retails manager => a web app for managing Retails Store With Point Of Sale System (POS)
....
Machine Learning Models Using Tenserflow
`;
        break;
      default:
        output = `Command '${command}' not recognized.`;
    }

    this.write(`\n${this.prompt}${command}\n${output}`);
  };

  write = (text) => {
    this.setState({ terminalText: this.state.terminalText + text + "\n" });
    this.terminalBody.current.scrollTop =
      this.terminalBody.current.scrollHeight;
  };

  componentDidMount() {
    this.terminal.current.focus();
    this.write(`
Welcome to my website. Type one of the following commands to explore:

COMMAND         DESCRIPTION

about           outputs a short blurb about me
projects        projects that I have worked on
project <name>  shows details about a specific project
skills          lists languages and skills that I have learned
    `);
  }

  render() {
    return (
      <div
        className="terminal"
        ref={this.terminal}
        onKeyDown={this.handleInput}
        onFocus={this.blinkCursor}
        onBlur={this.stopCursor}
        tabIndex="0"
        style={{
          top: this.state.top,
          left: this.state.left,
        }}
      >
        <div
          className="toolbar"
          onMouseDown={this.startDrag}
          onMouseMove={this.drag}
          onMouseUp={this.endDrag}
          style={{
            cursor: this.state.dragging ? "grabbing" : "grab",
          }}
        >
          <div className="buttonContainer">
            <button onClick={this.close} className="close" />
            <button onClick={this.toggleWidth} className="toggle" />
          </div>

          <p>./alexdovzhanyn.sh</p>
        </div>
        <div className="body" ref={this.terminalBody}>
          <pre>{this.state.terminalText}</pre>
          <p className="prompt">
            {this.prompt}
            {this.state.command}
            <span
              className="cursor"
              ref={this.cursor}
              style={{ display: this.state.cursor ? "inline-block" : "none" }}
            />
          </p>
        </div>
      </div>
    );
  }
}

export default Terminal;
