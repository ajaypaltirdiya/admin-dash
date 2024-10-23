


const CardWidget = ({...rest}) => {
    const {icon,amount,title,footerTitle,percentage,bgColor} = rest;
  return (
    <div className="col-md-4 col-lg-3">
        <div className="card">
            <div className="card_content">
              <div className={`card_icon ${bgColor}`}>
                {icon}
              </div>
              <div className="card_right_widget">
                <h3>{title}</h3>
                <h2>{amount}</h2>
              </div>
            </div>
            <div className="card_footer"><span className={percentage > 0 ? 'text-success':'text-danger'}>{percentage}%</span> {footerTitle}</div>
        </div>
      </div>
  )
}

export default CardWidget