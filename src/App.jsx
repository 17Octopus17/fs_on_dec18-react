import React from 'react';

class Field extends React.Component {
  constructor(props) {
    super(props);

    const { size } = props;

    this.state = {
      cells: Array(size * size)
        .fill(null)
        .map((value, index) => {
          return {
            value, id: index
          };
        }),
    }
  }

  render() {
    const { cells } = this.state;
    const { size } = this.props;
    const cellWidth = 100

    return (
      <div className="field" style={{ width: size * cellWidth }}>
        { cells.map(cell => (
          <div key={ cell.id }>
            { cell.value || '-' }
          </div>
        ))}
      </div>
    )
  }
}

const App = () => {
  return (
    <Field size={3} />
  );
};

export default App;
