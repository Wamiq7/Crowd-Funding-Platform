import React from "react";

export default function ValidateInfo(inputs) {
  let errors = {};

  // ORGANIZATION NAME 
  if (!inputs.organizationname.trim()) {
    errors.organizationname = "error";
  } else {
    errors.organizationname= "success";
  }

 

  //ORGANIZATION DETAILS
  if (!inputs.organizationdetails) {
    errors.organizationdetails = "error";
  } else {
    errors.organizationdetails = "success";
  }

  //PROJECT NAME
  if (!inputs.projectname) {
    errors.projectname = "error";
  } else {
    errors.projectname = "success";
  }
  //PROJECT DESCRIPTION
  
   if (!inputs.projectdescription) {
    errors.projectdescription = "error";
  } else {
    errors.projectdescription= "success";
  }


  //COUNTRY
  if (!inputs.country) {
    errors.country = "error";
  } else if (!/^[A-Za-z]+/.test(inputs.country.trim())) {
    errors.country = "error";
  } else {
    errors.country = "success";
  }
    //  CITY
    if (!inputs.city) {
      errors.city = "error";
    } else if (!/^[A-Za-z]+/.test(inputs.city.trim())) {
      errors.city = "error";
    } else {
      errors.city = "success";
    }

      //START DATE
  if (!inputs.startdate) {
    errors.startdate = "error";
  } else {
    errors.startdate = "success";
  }

   //END DATE
        if (!inputs.enddate) {
          errors.enddate = "error";
        } else {
          errors.enddate = "success";
        }
        
   //SUPPORTING DOCUMENT
   if (!inputs.document) {
    errors.document = "error";
  } else {
    errors.document = "success";
  }




  return errors;
}
