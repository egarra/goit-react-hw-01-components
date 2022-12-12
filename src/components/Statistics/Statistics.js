import PropTypes from 'prop-types';
import './Statistics.css';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

function Statistics ({title, stats}) {
    return (
        <section className="statistics">
            <h2 className="title">{title || null}</h2>
            <div className='wrapper'>
                <ul className="stat-list">
                    {stats.map(({id, label, percentage}) => {
                        return (
                        <li 
                            key={id} 
                            className="item" 
                            style={{background: getRandomHexColor()}}>
                            <span className="label">{label}</span>
                            <span className="percentage">{percentage}%</span>
                        </li>   
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
  }

export default Statistics; 