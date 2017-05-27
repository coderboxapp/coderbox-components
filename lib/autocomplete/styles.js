'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  container: {
    position: 'relative'
  },
  suggestionsContainer: {
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '-4px',
    zIndex: '4',
    marginTop: '-1px',
    border: '1px solid #dadada',
    background: 'white',
    fontSize: '14px',
    display: 'none',
    transform: 'translate(0%, 100%)',
    borderRadius: '4px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
  },
  suggestionsContainerOpen: {
    display: 'block'
  },
  suggestionsList: {
    margin: '0px',
    padding: '0px',
    listStyleType: 'none',
    marginBottom: '0px',
    borderRadius: '4px'
  },
  suggestion: {
    padding: '8px 12px',
    textAlign: 'left',
    borderBottom: '1px solid #DADADA'
  },
  suggestionHighlighted: {
    background: '#e8e8e8'
  },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #dadada',
    borderRadius: 4,
    padding: '6px 8px',
    outline: 'none'
  }
};