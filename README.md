# @thomas-devark/onexit

A utility function that runs a specified callback when the Node.js process exits, regardless of the exit reason. 

## Usage

### Importing the Module

```typescript
import OnExit from "./OnExit";
const OnExit from "./OnExit"
```

### Running a Callback on Process Exit

```typescript
OnExit(() => {
  // do something before process exit
});
```

## API

### `OnExit(callback: () => void): void`

Adds event listeners for process events that may cause the process to exit, and runs the specified callback when any of these events are triggered. The events include:

- `exit`: emitted when the Node.js process is about to exit
- `SIGINT`: emitted when the user interrupts the process by pressing `CTRL + C`
- `SIGUSR1` and `SIGUSR2`: emitted when the process receives a user-defined signal
- `uncaughtException`: emitted when an unhandled exception occurs in the process
- `SIGTERM`: emitted when the process is terminated by an external signal

The `callback` parameter is a function that will be called when any of these events are triggered. It should not accept any parameters or return any values.

## License

This module is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the `LICENSE` file for more information.