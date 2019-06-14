import ConnectedList from '../components/ConnectedList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return{
        articles: state.articles
    };
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;