import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavItem {
  label: string;
  slug: string;
  icon: string;
}

@Component({
  selector: 'app-docs-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './docs-layout.component.html',
  styleUrl: './docs-layout.component.css',
})
export class DocsLayoutComponent {
  readonly gettingStarted: NavItem[] = [
    { label: 'Installation', slug: 'installation', icon: 'pi-download' },
  ];

  readonly components: NavItem[] = [
    { label: 'Avatar',       slug: 'avatar',        icon: 'pi-user' },
    { label: 'Button',       slug: 'button',        icon: 'pi-stop-circle' },
    { label: 'Checkbox',     slug: 'checkbox',      icon: 'pi-check-square' },
    { label: 'Feed Item',    slug: 'feed-item',     icon: 'pi-list' },
    { label: 'Filter Panel', slug: 'filter-panel',  icon: 'pi-filter' },
    { label: 'Input Field',  slug: 'input-field',   icon: 'pi-pencil' },
    { label: 'List Item',    slug: 'list-item',     icon: 'pi-bars' },
    { label: 'Modal',        slug: 'modal',         icon: 'pi-window-maximize' },
    { label: 'Nav Item',     slug: 'nav-item',      icon: 'pi-compass' },
    { label: 'Tab Nav',      slug: 'tab-nav',       icon: 'pi-clone' },
    { label: 'Toggle',       slug: 'toggle',        icon: 'pi-circle' },
  ];
}
