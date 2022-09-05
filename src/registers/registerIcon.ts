import { App } from 'vue';
import {
  LoginOutlined,
  UserOutlined,
  HomeFilled,
  SettingOutlined,
  FolderOutlined,
  SnippetsOutlined
} from '@ant-design/icons-vue';
const components = [
  LoginOutlined,
  UserOutlined,
  HomeFilled,
  SettingOutlined,
  FolderOutlined,
  SnippetsOutlined
];

export default function (app: App): void {
  for (const icon of components) {
    app.component(icon.name, icon);
  }
}
