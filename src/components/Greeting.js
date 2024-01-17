import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRandomGreeting } from '../store/greetings/greetingSlice'; // Import the action creator

const Greeting = ({ greeting, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  console.log(greeting);

  return (
    <div className="greeting-container">
      <h1>{greeting}</h1>
    </div>
  );
};

Greeting.propTypes = {
  greeting: PropTypes.string,
  fetchRandomGreeting: PropTypes.func.isRequired,
};

Greeting.defaultProps = {
  greeting: '',
};

const mapStateToProps = (state) => ({
  greeting: state.greetings.greeting, // Update the path to access the greeting in the store
});

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
