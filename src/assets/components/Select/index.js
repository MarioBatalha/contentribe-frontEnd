import React from 'react';

const items = [
    'JavaScript',
    'Java',
    'PHP',
    'Android',
    'React',
    'Redux',
    'C#',
    'iOS'
  ]
  
  class Select extends React.Component {
   state = {
     input: '',
     value: []
   }
  
   render() {
     const visible = items.filter(item => this.state.value.indexOf(item) == -1)
      .filter(item => this.state.input ? item.toLowerCase().includes(this.state.input.toLowerCase()) : true)
     
    return (
      <Downshift
        inputValue={this.state.input}
        onChange={this.handleChange}
        render={({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex,
        }) => (
          <div className="container">
            <div className="form-group">
              <label className="label" htmlFor="typeahead">
                Skills
              </label>
              <div className="tag-input">
              {Boolean(this.state.value.length) && <div className="list">
                {this.state.value.map((tag, i) =>
                  <div className="tag" key={i}>
                    {tag}
                    <button className="close" onClick={() => this.handleRemove(i)}>×</button>
                  </div>
                )}
              </div>}
  
              <input {...getInputProps({
                  placeholder: 'Type here',
                  className: 'input',
                  id: "typeahead",
                  onInput: this.handleInput,
                  autoFocus: true
                })} />
  
              {isOpen && <div className="menu">
                  {Boolean(visible.length) && visible.map((item, i) => (
                    <div {...getItemProps({
                      item,
                      className: classNames('item', { '-highlighted': highlightedIndex === i }),
                      key: i
                    })}>{item}</div>
                  ))}
                
                  {!visible.length && (
                    <div className='placeholder'>
                      No results found.
                    </div>
                  )}
              </div>}
            </div>
            </div>
          </div>
        )} />
      )
    }
  
    handleInput = (evt) => {
      this.setState({
        input: evt.target.value
      })
    }
    
    handleChange = item => {
      this.setState({
        value: [...this.state.value, item],
        input: ''
      })
    }
    
    handleRemove = index => {
      this.setState({
        value: this.state.value.filter((value, i) => i !== index)
      })
    }
  }
  
  ReactDOM.render(
    <TagInput />,
    document.getElementById('mount')
  )