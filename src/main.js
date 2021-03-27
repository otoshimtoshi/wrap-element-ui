import Alert from './components/alert'
import Aside from './components/aside'
import Autocomplete from './components/autocomplete'
import Avatar from './components/avatar'
import Backtop from './components/backtop'
import Badge from './components/badge'
import Breadcrumb from './components/breadcrumb'
import BreadcrumbItem from './components/breadcrumb-item'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Calendar from './components/calendar'
import Card from './components/card'
import Carousel from './components/carousel'
import CarouselItem from './components/carousel-item'
import Cascader from './components/cascader'
import CascaderPanel from './components/cascader-panel'
import Checkbox from './components/checkbox'
import CheckboxButton from './components/checkbox-button'
import CheckboxGroup from './components/checkbox-group'
import Col from './components/col'
import Collapse from './components/collapse'
import CollapseItem from './components/collapse-item'
import ColorPicker from './components/color-picker'
import Container from './components/container'
import DatePicker from './components/date-picker'
import Dialog from './components/dialog'
import Divider from './components/divider'
import Drawer from './components/drawer'
import Dropdown from './components/dropdown'
import DropdownItem from './components/dropdown-item'
import DropdownMenu from './components/dropdown-menu'
import Footer from './components/footer'
import Form from './components/form'
import FormItem from './components/form-item'
import Header from './components/header'
import Icon from './components/icon'
import Image from './components/image'
import InfiniteScroll from './components/infinite-scroll'
import Input from './components/input'
import InputNumber from './components/input-number'
import Link from './components/link'
import Loading from './components/loading'
import Main from './components/main'
import Menu from './components/menu'
import MenuItem from './components/menu-item'
import MenuItemGroup from './components/menu-item-group'
import Message from './components/message'
import MessageBox from './components/message-box'
import Notification from './components/notification'
import Option from './components/option'
import OptionGroup from './components/option-group'
import PageHeader from './components/page-header'
import Pagination from './components/pagination'
import Popconfirm from './components/popconfirm'
import Popover from './components/popover'
import Progress from './components/progress'
import Radio from './components/radio'
import RadioButton from './components/radio-button'
import RadioGroup from './components/radio-group'
import Rate from './components/rate'
import Row from './components/row'
import Scrollbar from './components/scrollbar'
import Select from './components/select'
import Slider from './components/slider'
import Spinner from './components/spinner'
import Step from './components/step'
import Steps from './components/steps'
import Submenu from './components/submenu'
import Switch from './components/switch'
import TabPane from './components/tab-pane'
import Table from './components/table'
import TableColumn from './components/table-column'
import Tabs from './components/tabs'
import Tag from './components/tag'
import Timeline from './components/timeline'
import TimelineItem from './components/timeline-item'
import TimePicker from './components/time-picker'
import TimeSelect from './components/time-select'
import Tooltip from './components/tooltip'
import Transfer from './components/transfer'
import Tree from './components/tree'
import Upload from './components/upload'

import locale from 'element-ui/lib/locale'
import ja from 'element-ui/lib/locale/lang/ja'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

const components = [
  Alert,
  Aside,
  Autocomplete,
  Avatar,
  Backtop,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  CascaderPanel,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Container,
  DatePicker,
  Dialog,
  Divider,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Footer,
  Form,
  FormItem,
  Header,
  Icon,
  Image,
  InfiniteScroll,
  Input,
  InputNumber,
  Link,
  Loading,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Message,
  MessageBox,
  Notification,
  Option,
  OptionGroup,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Row,
  Scrollbar,
  Select,
  Slider,
  Spinner,
  Step,
  Steps,
  Submenu,
  Switch,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  Tag,
  TimePicker,
  TimeSelect,
  Timeline,
  TimelineItem,
  Tooltip,
  Transfer,
  Tree,
  Upload,
]

const install = function(Vue, opts = {}) {
  locale.use(opts.locale || ja)
  locale.i18n(opts.i18n)

  components.forEach(component => {
    Vue.use(component)
  })

  Vue.component('OCollapseTransition', CollapseTransition)

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 1000,
  }

  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
}

export default {
  version: '1.0.0',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Alert,
  Aside,
  Autocomplete,
  Avatar,
  Backtop,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  CascaderPanel,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Container,
  DatePicker,
  Dialog,
  Divider,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Footer,
  Form,
  FormItem,
  Header,
  Icon,
  Image,
  InfiniteScroll,
  Input,
  InputNumber,
  Link,
  Loading,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Message,
  MessageBox,
  Notification,
  Option,
  OptionGroup,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Row,
  Scrollbar,
  Select,
  Slider,
  Spinner,
  Step,
  Steps,
  Submenu,
  Switch,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  Tag,
  TimePicker,
  TimeSelect,
  Timeline,
  TimelineItem,
  Tooltip,
  Transfer,
  Tree,
  Upload,
}
