import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

function TaskModal({ open, onClose}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Task</DialogTitle>

      <DialogContent>
        Task form
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained">
          Save Task
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default TaskModal