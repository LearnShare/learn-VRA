# Service - 服务

理想情况下，组件应当只负责处理模板相关数据、模板渲染、事件处理和生命周期方法等有限的内容。

其他如接口请求，数据计算、存取或共享等功能，都可以放在组件外的模块（JS 模块，并非 Angular 模块）中。

这类模块称为服务（Service），可以通过依赖注入（Dependency Injection，简称为 DI）插入到组件中，并可在不同的组件中共享。

## @Injectable()

`@Injectable()` 装饰器用于标记类为服务：

```ts
@Injectable({
  providedIn: 'root',
})
class MusicPlayerService {}
```

`@Injectable()` 可以包含配置参数，有唯一的选项 `providedIn`，用于设置该服务的应用方式和作用范围：

+ `root`: 在跟模块中共享该服务的单一实例
+ 其他选项：待补充

## 依赖注入

```ts
import {
  MusicItem,
  MusicPlayerService,
} from 'src/app/services/music-player.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
})
export class MusicListComponent
    implements OnInit {
  list: Array<MusicItem>;

  constructor(private playerService: MusicPlayerService) {
    this.list = [];
  }

  ngOnInit() {
    this.list = this.playerService.getList();
  }

  play(index: number) {
    this.playerService.play(index);
  }
}
```

这里通过构造函数的参数声明了私有类成员 `playerService`，它就是服务的实例。之后就可以在组件中调用服务内的方法获取和修改数据了。

**注意**：通过服务共享的数据也不是响应式的。

## 最终代码

Github: <https://github.com/LearnShare/vra-angular/tree/12.service>

在线预览: <https://codesandbox.io/s/vra-angular-12-service-2jlk4>

## 继续阅读

+ 上一节: [@Output](./angular/output.md)
+ 下一节:
