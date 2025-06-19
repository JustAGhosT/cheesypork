import {
  Leaf,
  Users,
  TrendingUp,
  Shield,
  Heart,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  X,
  Menu,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Plus,
  Minus,
  ShoppingCart,
  User,
  Settings,
  LogOut,
  Eye,
  EyeOff,
  Search,
  Filter,
  Download,
  Upload,
  Edit,
  Trash2,
  Save,
  Calendar,
  Globe,
  Smartphone,
  Truck,
  Package,
  CreditCard,
  DollarSign,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Award,
  Zap,
  Lightbulb,
  Recycle,
  Sprout,
  TreePine,
  Wheat,
  Apple,
  Fish,
  Beef,
  type LucideIcon,
} from "lucide-react"

export const Icons = {
  // Nature & Sustainability
  leaf: Leaf,
  sprout: Sprout,
  treePine: TreePine,
  recycle: Recycle,

  // Business & Analytics
  users: Users,
  trendingUp: TrendingUp,
  barChart: BarChart3,
  pieChart: PieChart,
  lineChart: LineChart,
  target: Target,
  award: Award,
  dollarSign: DollarSign,

  // UI & Navigation
  menu: Menu,
  x: X,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  plus: Plus,
  minus: Minus,
  search: Search,
  filter: Filter,

  // Status & Feedback
  checkCircle: CheckCircle,
  alertCircle: AlertCircle,
  info: Info,
  shield: Shield,
  heart: Heart,
  star: Star,

  // Contact & Communication
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
  clock: Clock,
  smartphone: Smartphone,
  globe: Globe,

  // E-commerce
  shoppingCart: ShoppingCart,
  package: Package,
  truck: Truck,
  creditCard: CreditCard,

  // User & Account
  user: User,
  settings: Settings,
  logOut: LogOut,
  eye: Eye,
  eyeOff: EyeOff,

  // Actions
  edit: Edit,
  trash: Trash2,
  save: Save,
  download: Download,
  upload: Upload,
  calendar: Calendar,

  // Farm & Food
  wheat: Wheat,
  apple: Apple,
  fish: Fish,
  beef: Beef,

  // Energy & Innovation
  zap: Zap,
  lightbulb: Lightbulb,
} as const

export type IconName = keyof typeof Icons
export type { LucideIcon }
