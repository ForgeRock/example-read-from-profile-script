/*
  - Data made available by nodes that have already executed are available in the sharedState variable.
  - The script should set outcome to either "true" or "false".
 */

//Pull user out of sharedState
var currentUser = sharedState.get("username");
var attributeToRead = "mail";

logger.message("Read Profile: email address =  " + idRepository.getAttribute(currentUser,attributeToRead).iterator().next());

outcome = "true";
