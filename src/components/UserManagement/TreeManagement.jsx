import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const TabCheckboxAccordion = ({data,setPermissionData}) => {
    const [activeTab, setActiveTab] = useState('markets'); 
    const [checkedItems, setCheckedItems] = useState({}); 
    const [openAccordions, setOpenAccordions] = useState({}); 

    useEffect(() => {
      setPermissionData({...checkedItems,checkedItems})
    },[checkedItems])

    // Toggle between markets and brands
    const handleToggleTab = (tab) => {
      setActiveTab(tab);
    };

    // Handleling checkbox change
    const handleCheckboxChange = (id, isParent, children) => {
      setCheckedItems((prev) => {
        const newChecked = { ...prev };
        newChecked[id] = !newChecked[id];

        if (isParent && children) {
          children.forEach((child) => {
            newChecked[child.id] = newChecked[id];
          });
        }
 
        return newChecked;
      });
    };
  
    // Handling accordion toggle
    const toggleAccordion = (id) => {
      setOpenAccordions((prev) => ({
        ...prev,[id]: !prev[id], 
      }));
    };
  
    // tree render child elements
    const renderChildren = (children) => {
      return children.map((child) => (
        <div key={child.id} style={{ marginLeft: '20px',fontSize:'13px' }}>
          <input
            style={{marginRight:'8px'}}
            type="checkbox"
            className="form-check-input"
            checked={checkedItems[child.id] || false}
            onChange={() => handleCheckboxChange(child.id, child.children.length > 0, child.children)}
          />
          {child.name}
          {child.children && child.children.length > 0 && (
            <div style={{fontSize:'13px'}}>{renderChildren(child.children)}</div>
          )}
        </div>
      ));
    };
  
    //accordion sections
    const renderAccordion = (items) => {
      return items.map((item) => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          {/* Accordion header */}
          <div className="accordion_header" onClick={() => toggleAccordion(item.id)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
            <input
              type="checkbox"
              className="form-check-input"
              checked={checkedItems[item.id] || false}
              onChange={() => handleCheckboxChange(item.id, item.children.length > 0, item.children)}
            />
            {item.name}

            {/* this arrow */}
            <span style={{ marginLeft: 'auto', transition: 'transform 0.3s' }}>
            {openAccordions[item.id] ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
            
          </div>
  
          {/* Accordion content */}
          {openAccordions[item.id] && (
            <div style={{ marginLeft: '20px' }}>{renderChildren(item.children)}</div>
          )}
        </div>
      ));
    };
  
    return (
      <div>
        <div className="tree_tabs_contain">
          <button className={activeTab==='markets'?'active':''} onClick={() => handleToggleTab('markets')}>Markets</button>
          <button className={activeTab==='brands'?'active':''} onClick={() => handleToggleTab('brands')}>Brands</button>
        </div>
  
        <div className="tree_checkbox_wrapper">
            <div className="checkbox_title_permission">Permissions</div>
          {activeTab === 'markets' ? (
            renderAccordion(data.markets)
          ) : (
            renderAccordion(data.brands)
          )}
        </div>
      </div>
    );
};

export default TabCheckboxAccordion;
