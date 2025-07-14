function validateBug(bug) {
    if (!bug.title || typeof bug.title !== 'string') return false;
    return true;
  }
  
  module.exports = validateBug;
  