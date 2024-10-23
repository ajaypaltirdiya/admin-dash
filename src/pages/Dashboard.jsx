import CardWidget from "../components/Dashboard/CardWidget"
import WebsiteViews from "../components/Dashboard/WebsiteViews";
import { MdOutlineWeekend } from "react-icons/md"
import { CiUser } from "react-icons/ci";
import DailySales from "../components/Dashboard/DailySales";
import CompletedTask from "../components/Dashboard/CompletedTask";
import { WeekDay,DaillySales,CompletedTaskData } from "../assets/assets";



const Dashboard = () => {
  return (
    <>
      <div className="row">
        <CardWidget bgColor="bg-gradient-dark" icon={<MdOutlineWeekend />} amount={'$53k'} title={`Today's Money`} footerTitle={"than last week"} percentage={55} />
        <CardWidget bgColor="bg-gradient-primary" icon={<CiUser />} amount={'2250'} title={`Today's Users`} footerTitle={"than last month"} percentage={3} />
        <CardWidget bgColor="bg-gradient-success" icon={<CiUser />} amount={'3456'} title={`New Clients`} footerTitle={"than yesterday"} percentage={-2} />
        <CardWidget bgColor="bg-gradient-info" icon={<MdOutlineWeekend />} amount={'$568458'} title={`Sales`} footerTitle={"than yesterday"} percentage={5} />
      </div>

      <div className="row mt-5 dash_charts">
        <WebsiteViews data={WeekDay}/>
        {/* chart 2 */}
        <DailySales  data={DaillySales}/>
        {/* chart 3 */}
        <CompletedTask  data={CompletedTaskData}/>
      </div>

    </>
  )
}

export default Dashboard