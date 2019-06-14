import ConnectedForm from '../components/ConnectedForm';
import { addArticles } from '../actions/index';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    addArticles: article => dispatch(addArticles(article))
  };
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;