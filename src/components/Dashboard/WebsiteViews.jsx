import { Tooltip } from 'bootstrap'
import { CiClock2 } from 'react-icons/ci'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const WebsiteViews = ({data}) => {
  return (
    <div className="col-lg-4 col-md-6 mt-4 mb-4">
          <div className="card z-index-2 ">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                <div className="chart">
                <BarChart width={350} height={200} data={data}>
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis  stroke="#fff"/>
                  <Tooltip />
                  <CartesianGrid stroke="#ffd5e3" strokeDasharray="5 5" />
                  <Bar dataKey="value" fill="#fff" radius={10} barSize={8} />
                </BarChart>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h6 className="mb-0 ">Website Views</h6>
              <p className="text-sm ">Last Campaign Performance</p>
              <hr className="dark horizontal" />
              <div className="d-flex text-secondary align-items-center">
                <CiClock2 size={16} />
                <p className="mb-0 my-0 text-sm ms-1"> campaign sent 2 days ago </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default WebsiteViews