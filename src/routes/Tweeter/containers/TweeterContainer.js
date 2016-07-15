import {connect} from 'react-redux';
import {loadTweetsSuccess} from '../modules/tweeter';
import Tweeter from 'components/Tweeter';


const mapActionCreators = {
  loadTweetsSuccess: () => loadTweetsSuccess()
};

const mapStateToProps = (state) => ({
  tweets: state.tweets
});

export default connect(mapStateToProps, mapActionCreators)(Tweeter)
