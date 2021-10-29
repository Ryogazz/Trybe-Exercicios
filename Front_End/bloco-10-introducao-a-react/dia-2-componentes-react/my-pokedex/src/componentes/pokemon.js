import react from "react";
import PropTypes from 'prop-types';

class Pokemon extends react.Component{
    render(){
        const { pokemon: { name, type, averageWeight, image} } = this.props;
        
        return(
            <div>
                <div>
                    <p>{ name }</p>
                    <p>{ type }</p>
                    <p>
                    {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
                    </p>
                </div>
                <img src={ image } alt={ `${name} sprite` } />
            </div>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
      image: PropTypes.string,
    }).isRequired,
  };

export default Pokemon;
