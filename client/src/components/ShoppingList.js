import React, { Component } from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
}
    from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';
import { GET_ITEMS, DELETE_ITEM } from '../actions/types';

export class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return (
            <Container>
                

                <ListGroup>

                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    item: state.item
});

const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch({ type: GET_ITEMS }),
    deleteItem: () => dispatch({ type: DELETE_ITEM})
});

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);
