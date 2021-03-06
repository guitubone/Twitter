// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hMHVnEgKCHqmbs9i49R9rv
// Component: BH7mdVRR6kf
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Avatar from "../../Avatar"; // plasmic-import: bv_MRIPv_2ll/component
import ActionButton from "../../ActionButton"; // plasmic-import: IyIs__-7z4p/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_twitter.module.css"; // plasmic-import: hMHVnEgKCHqmbs9i49R9rv/projectcss
import * as sty from "./PlasmicTweet.module.css"; // plasmic-import: BH7mdVRR6kf/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: YXue6X8gtEfm/icon
import ReplyIcon from "./icons/PlasmicIcon__Reply"; // plasmic-import: 7y1qa6ONnzak/icon
import RetweetIcon from "./icons/PlasmicIcon__Retweet"; // plasmic-import: qw8SmQ32WFCL/icon
import LikeIcon from "./icons/PlasmicIcon__Like"; // plasmic-import: 68dmfSKZnYN6/icon
import ShareIcon from "./icons/PlasmicIcon__Share"; // plasmic-import: P5srEezaCB97/icon
import image3SD1CQyhEiB09 from "./images/image3.png"; // plasmic-import: sD1CQyhEiB09/picture

export type PlasmicTweet__VariantMembers = {
  options: "hasReplies";
};

export type PlasmicTweet__VariantsArgs = {
  options?: SingleChoiceArg<"hasReplies">;
};

type VariantPropType = keyof PlasmicTweet__VariantsArgs;
export const PlasmicTweet__VariantProps = new Array<VariantPropType>("options");

export type PlasmicTweet__ArgsType = {
  name?: React.ReactNode;
  username?: React.ReactNode;
  children?: React.ReactNode;
  photo?: React.ReactNode;
  timestamp?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTweet__ArgsType;
export const PlasmicTweet__ArgProps = new Array<ArgPropType>(
  "name",
  "username",
  "children",
  "photo",
  "timestamp"
);

export type PlasmicTweet__OverridesType = {
  root?: p.Flex<"div">;
  avatar?: p.Flex<typeof Avatar>;
  text?: p.Flex<"div">;
};

export interface DefaultTweetProps {
  name?: React.ReactNode;
  username?: React.ReactNode;
  children?: React.ReactNode;
  photo?: React.ReactNode;
  timestamp?: React.ReactNode;
  options?: SingleChoiceArg<"hasReplies">;
  className?: string;
}

function PlasmicTweet__RenderFunc(props: {
  variants: PlasmicTweet__VariantsArgs;
  args: PlasmicTweet__ArgsType;
  overrides: PlasmicTweet__OverridesType;
  dataFetches?: PlasmicTweet__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__se1Jf)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox___8OVgb)}
        >
          <Avatar
            data-plasmic-name={"avatar"}
            data-plasmic-override={overrides.avatar}
            className={classNames("__wab_instance", sty.avatar)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__yRMxB)}
                  displayHeight={"49px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"49px" as const}
                  src={{
                    src: image3SD1CQyhEiB09,
                    fullWidth: 400,
                    fullHeight: 400,
                    aspectRatio: undefined
                  }}
                />
              ),

              value: args.photo
            })}
          </Avatar>

          {(hasVariant(variants, "options", "hasReplies") ? true : false) ? (
            <div
              className={classNames(defaultcss.all, sty.freeBox__biBgc, {
                [sty.freeBox__options_hasReplies__biBgcUq7Mp]: hasVariant(
                  variants,
                  "options",
                  "hasReplies"
                )
              })}
            />
          ) : null}
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__g7EoM)}
      >
        <div className={classNames(defaultcss.all, sty.freeBox__p26Gy)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__bnq4)}
          >
            <div className={classNames(defaultcss.all, sty.freeBox__b8F2E)}>
              <div className={classNames(defaultcss.all, sty.freeBox__oWyGp)}>
                {p.renderPlasmicSlot({
                  defaultContents: "Dan Abramov",
                  value: args.name,
                  className: classNames(sty.slotTargetName)
                })}
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox__n4Wk)}>
              {p.renderPlasmicSlot({
                defaultContents: "@dan_abramov",
                value: args.username,
                className: classNames(sty.slotTargetUsername)
              })}
            </div>

            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text
              )}
            >
              {"??"}
            </div>

            {p.renderPlasmicSlot({
              defaultContents: "9h",
              value: args.timestamp,
              className: classNames(sty.slotTargetTimestamp)
            })}
          </p.Stack>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__rd10)}
            slot={"25"}
          >
            <IconIcon
              className={classNames(defaultcss.all, sty.svg__ee3Yl)}
              role={"img"}
            />
          </ActionButton>
        </div>

        <div className={classNames(defaultcss.all, sty.freeBox___0Pplk)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "Is anyone intentionally using multiple versions of React? (Yeah I know this is generally frowned upon but sometimes you have no other good options for legacy reasons.) I want to know how your build is set up to handle code sharing.",
            value: args.children
          })}
        </div>

        <div className={classNames(defaultcss.all, sty.freeBox__hOfP)}>
          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__lxi9P)}
            options={["labeled"]}
            slot={"25"}
          >
            <ReplyIcon
              className={classNames(defaultcss.all, sty.svg__fwY4B)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__r2ZUa)}
            options={["labeled"]}
            slot={"25"}
          >
            <RetweetIcon
              className={classNames(defaultcss.all, sty.svg__wRwqm)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__oGl9T)}
            options={["labeled"]}
            slot={"25"}
          >
            <LikeIcon
              className={classNames(defaultcss.all, sty.svg__xtroz)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__bQu9W)}
            slot={"25"}
          >
            <ShareIcon
              className={classNames(defaultcss.all, sty.svg___9K7Ca)}
              role={"img"}
            />
          </ActionButton>
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "avatar", "text"],
  avatar: ["avatar"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  avatar: typeof Avatar;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTweet__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTweet__VariantsArgs;
    args?: PlasmicTweet__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTweet__Fetches;
  } & Omit<PlasmicTweet__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTweet__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTweet__ArgProps,
      internalVariantPropNames: PlasmicTweet__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTweet__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTweet";
  } else {
    func.displayName = `PlasmicTweet.${nodeName}`;
  }
  return func;
}

export const PlasmicTweet = Object.assign(
  // Top-level PlasmicTweet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicTweet
    internalVariantProps: PlasmicTweet__VariantProps,
    internalArgProps: PlasmicTweet__ArgProps
  }
);

export default PlasmicTweet;
/* prettier-ignore-end */
