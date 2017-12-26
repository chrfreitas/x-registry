import { connect } from 'react-redux';

import ListComponent from '../components/list.component';
import { add } from '../actions/app.action';

const mapStateToProps = state => {
    return {
        domains: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            fetch('../../data/domains.json')
                .then(response => {
                    return response.json()
                })
                .then(({ domains }) => {
                    domains.map(item => dispatch(add(item)))
                });
        },
        checkUnregistry: (domain) => {
            const extension = domain.split('.')[1];

            if(extension && extension.match(/cars|lol/)){
                return 'YES';
            }
        }
    }
}

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListComponent)

export default ListContainer