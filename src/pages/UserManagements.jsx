import { useEffect, useState } from 'react';
import userManagementData from '../assets/data.json'
import TreeManagement from '../components/UserManagement/TreeManagement'
import UserManagementForm from '../components/UserManagement/UserManagementForm';

const UserManagements = () => {
  const parsedData = userManagementData;
  const [managementFormData,setManagementFormData] = useState();
  const [permissionsData,setPermissionsData] = useState();
  useEffect(()=>{
    console.log('managementFormData...',managementFormData)
    console.log('permissionsData...',permissionsData)
  },[managementFormData,permissionsData]);

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="card p-3">
          <UserManagementForm setFormData={setManagementFormData}/>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card p-3">
          <TreeManagement setPermissionData={setPermissionsData} data={parsedData} />
        </div>
      </div>
    </div>
   
  )
}

export default UserManagements