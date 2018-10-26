/**
 * Created by XiaoMing 2018/10/25 1900.
 */
import EventListener from './event_listener'
const global = global || {};
global.event = EventListener({});
export default global;