import React from 'react';
export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    // children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    children: require('../assets/imgs/mrent_logo.png')

  },
  Menu: {
    className: 'header2-menu',
    children: [
      {
        name: 'Banner1_0',
        to: 'Banner1_0',
        children: '展示',
        className: 'menu-item',
      },
      {
        name: 'Content6_0',
        to: 'Content6_0',
        children: '公司简介',
        className: 'menu-item',
      },
      {
        name: 'Content4_0',
        to: 'Content4_0',
        children: '产品介绍',
        className: 'menu-item',
      },
      {
        name: 'Content7_0',
        to: 'Content7_0',
        children: '公司愿景',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
  menuLink: { children: [] },
};
export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner1-title',
          // children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
          children: require('../assets/imgs/mrent_logo.png')
        },
        content: {
          className: 'banner1-content',
          children: '米租是全球领先的可循环（再生资源）科技公司',
        },
        button: { className: 'banner1-button', children: '联系我们' },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          // children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
          children: require('../assets/imgs/mrent_logo.png')
        },
        content: {
          className: 'banner1-content',
          children: '米租是全球领先的可循环（再生资源）科技公司',
        },
        button: { className: 'banner1-button', children: '联系我们' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          // children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
          children: require('../assets/imgs/mrent_logo.png')
        },
        content: {
          className: 'banner1-content',
          children: '米租是全球领先的可循环（再生资源）科技公司',
        },
        button: { className: 'banner1-button', children: '联系我们' },
      },
    ],
  },
};
export const Content60DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '米租科技提供专业的服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '科技型互联网加出租加共享加可循环科技（再生资源）企业',
      },
    ],
  },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: '科技' },
        content: {
          className: 'content6-content',
          children:
            '米租是全球领先的可循环（再生资源）科技产品设计和可循环产品售卖、租赁平台，致力于把全新可循环产品，从使用安全卫生到外观爆棚再到使用科学带入每个人、每个家庭、每个组织，通过反复可循环利用为人类社会、为国家节约大量资源，为方便万家百姓构建了绿色、生态、和谐的可循环能源世界。',
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: { className: 'content6-title', children: '创新' },
        content: {
          className: 'content6-content',
          children:
            '我们在可循环（再生资源）科技研究、可循环产品设计、可循环产品复新、可循环产品科学使用、和可循环产品售卖与租赁平台等领域为客户提供有竞争力、安全可信赖的产品、解决方案与服务，与资源生态伙伴开放合作，持续为客户创造价值，释放个人潜能，丰富家庭生活，激发组织创新。',
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'content6-title', children: '共享' },
        content: {
          className: 'content6-content',
          children:
            '米租坚持树立以人为本，以国为家，以民族振兴为己任，围绕客户需求持续创新，加大基础研究投入，厚积薄发，推动世界进步。',
        },
      },
    ],
  },
};
export const Content40DataSource = {
  wrapper: { className: 'home-page-wrapper content4-wrapper' },
  page: { className: 'home-page content4' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '米租科技提供最优质的产品',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content content4-title-content',
        children: '科技想象力，产品创造力，绿色影响力',
      },
    ],
  },
  video: {
    className: 'content4-video',
    children: {
      video: 'https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4',
      image: 'https://zos.alipayobjects.com/rmsportal/HZgzhugQZkqUwBVeNyfz.jpg',
    },
  },
};
export const Content70DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '我们为世界带来了什么？',
        className: 'title-h1',
      },
      { name: 'content', children: '米租人将胸怀家国、科技创新、绿色生态、科学高效、求真务实、努力前行' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: '为客户创造价值', className: 'content7-tag-name' },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <p>
                  米租和运营商一起，预计初步在全国建设300多个网点，帮助社会超过三分之一的人口实现联接。米租携手合作伙伴，为社会百姓、政府及公共事业机构，金融、能源、交通、制造等企业客户，提供开放、灵活、安全的可循环产品（再生资源）互联网售卖与租赁平台，推动行业互联网加智能数字化转型；为米租合作伙伴、社区客户提供稳定可靠、安全可信和可持续反复使用的售卖与租赁平台。
                </p>
                {/* <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。 */}
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: { className: 'content7-tag-name', children: '推动产业良性发展' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <p>
                  米租主张开放、合作、共赢，与客户合作伙伴及友商合作创新、扩大产业价值，形成健康良性的产业生态系统。米租既是可循环经济行业的领导者也是参与者，会积极加入标准组织、产业联盟和开源社区，积极参与和支持主流标准的制定、构建共赢的生态圈。我们面向可循环能源、互联网租赁、再生资源互联网售卖与回收等新兴热点领域，与产业伙伴分工协作，推动产业持续良性发展。
                </p>
                {/* <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。 */}
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: { children: '促进经济增长', className: 'content7-tag-name' },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <p>
                  米租不仅为所在国家带来直接的税收贡献，促进当地就业，形成产业链带动效应，更重要的是通过创新的可循环经济（再生能源）模式与专利解决方案打造“互联网+回收+再利用”的模式与路径，开展信息采集，数据分析，流向监测，优化网点布局，实现线上回收线下物流相融合，搭建科学高效的物流体系，充分为国民节约开支，减少浪费，为国家节约能源，减少污染，造就生态环境。
                </p>
                {/* <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。 */}
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
      {
        name: 'block3',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: { className: 'content7-tag-name', children: '推动社会可持续发展' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <p>
                  当前，国家为了提高资源利用率，保护与改善环境，实现可持续性发展，鼓励与强调产品要实现可循环利用；在以资源高效循环利用为核心的基础上，着力构建循环型产业体系，推动区域或者社会层面的循环经济发展，提升重点领域内循环经济产品的发展水平。米租公司结合国家法律及政策，着力强调落实《循环经济促进法》，在生产、流通和消费等过程中，进行了减量化、再利用、资源化的可循环经济活动，最大化的减少资源消耗和废弃物产生，提高废弃物再利用和资源化水平；推动和引导回收模式创新，探索“互联网+回收”的模式与路径，积极支持智能回收，鼓励利用互联网、大数据、物联网、信息管理平台等现代信息手段，实现线上回收线下融合，搭建企业自动化管理技术，创新可循环再利用商品的技术，有效推动了社会资源可持续性发展。
                </p>
                {/* <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。 */}
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
      {
        name: 'block4',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: { className: 'content7-tag-name', children: '为奋斗者提供舞台' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <p>
                  米租坚持“以人才发展为根本，以国家利益为己任”，以责任贡献来评价员工和选拔干部，为员工提供了社会发展平台、与世界对话的机会，使大量年轻人有机会担当重任，快速成长，也使得米租员工通过个人的努力，收获了合理的回报与值得回味的人生经历。
                </p>
                {/* <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。 */}
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },




    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          // children: 'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
          children: require('../assets/imgs/mrent_logo.png'),

        },
        content: {
          className: 'slogan',
          children: '全球领先的可循环（再生资源）科技公司',
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '产品' },
        content: {
          children: (
            <span>
              <p>
                {' '}
                <a href="#">天猫</a>{' '}
              </p>{' '}
              <p>
                {' '}
                <a href="#">京东</a>{' '}
              </p>{' '}
              <p>
                {' '}
                <a href="#">淘宝</a>{' '}
              </p>{' '}
              <p>
                {' '}
                <a href="#">欧尚</a>{' '}
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        content: {
          children: (
            <span>
              <p>
                {' '}
                <a href="#">FAQ</a>{' '}
              </p>{' '}
              <p>
                {' '}
                <a href="#">联系我们</a>{' '}
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '相关链接' },
        content: {
          children: (
            <span>
              <p>
                {' '}
                <a href="#">科技部</a>{' '}
              </p>{' '}
              <p>
                {' '}
                <a href="#">环保局</a>{' '}
              </p>{' '}
              <p>
                {' '}
                <a href="#">工信局</a>{' '}
              </p>{' '}
              <p>
                {' '}
                <a href="#">工商局</a>{' '}
              </p>
            </span>
          ),
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018 by <a href="#">米租</a> All Rights
        Reserved
      </span>
    ),
  },
};
