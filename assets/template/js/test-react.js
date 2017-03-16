      <div id="slide_nav_wrap" class="slide-nav-wrapper"></div>

      <script type="text/babel">
        var LINKS_NAV = [
          {
            id: 1,
            linkName: 'Home',
            link: 'index.html'
          },
          {
            id: 2,
            linkName: 'Beschwerde Lesen',
            link: 'beschwerde-lesen.html'
          },
          {
            id: 3,
            linkName: 'Beschwerde',
            link: 'beschwerde.html'
          },
          {
            id: 5,
            linkName: 'Categories',
            link: 'categories.html'
          },
          {
            id: 6,
            linkName: 'Company Account',
            link: 'company-account.html'
          },
          {
            id: 7,
            linkName: 'Company Account Profil',
            link: 'company-account-profil.html'
          },
          {
            id: 8,
            linkName: 'Company Account ReclaRank Seal',
            link: 'company-account-reclaRank-seal.html'
          },
          {
            id: 9,
            linkName: 'Company Account Links',
            link: 'company-account-links.html'
          },
          {
            id: 10,
            linkName: 'Company Account Automatic',
            link: 'company-account-automatic.html'
          },
          {
            id: 11,
            linkName: 'Company Public',
            link: 'company-public.html'
          },
          {
            id: 12,
            linkName: 'Company Rechnungen',
            link: 'company-rechnungen.html'
          },
          {
            id: 13,
            linkName: 'Edit Email Sending',
            link: 'edit-email-sending.html'
          },
          {
            id: 14,
            linkName: 'Firmen',
            link: 'firmen.html'
          },
          {
            id: 15,
            linkName: 'List Articles',
            link: 'list-articles.html'
          },
          {
            id: 16,
            linkName: 'Request Firm Management',
            link: 'request-firm-management.html'
          },
          {
            id: 17,
            linkName: 'Schreiben',
            link: 'schreiben.html'
          },
          {
            id: 18,
            linkName: 'Search',
            link: 'search.html'
          },
          {
            id: 19,
            linkName: '404',
            link: '404.html'
          },
          {
            id: 20,
            linkName: 'Email Confirm',
            link: 'email-confirm.html'
          },
        ];

        var SlideNav = React.createClass({
              render: function() {
                return <li><a href={this.props.link} >{this.props.linkName}</a></li>
              }
            });
        var SlideNavList = React.createClass({
              render: function() {
                return (
                  <ul id="slide-out" className="side-nav slide-nav">
                    {
                      LINKS_NAV.map(function(el) {
                        return <SlideNav neme={el.name} />;
                      })
                    }
                  </ul>
                )
              }
            });
        ReactDOM.render(
          <SlideNav />,
          document.getElementById("slide_nav_wrap")
        );
      </script>